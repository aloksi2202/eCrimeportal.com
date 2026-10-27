
package com.Backend.Filters;

import com.Backend.Utiles.JwtUtil;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain
    ) throws ServletException, IOException {

        // OPTIONS request ko ek hi baar pass karo
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            chain.doFilter(request, response);
            return;
        }

        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null
                && authorizationHeader.startsWith("Bearer ")) {

            String jwt = authorizationHeader.substring(7).trim();

            if (!jwt.isEmpty()) {
                try {
                    String username = jwtUtil.extractUsername(jwt);

                    if (username != null
                            && SecurityContextHolder.getContext()
                            .getAuthentication() == null) {

                        UserDetails userDetails =
                                userDetailsService.loadUserByUsername(username);

                        if (jwtUtil.validateToken(
                                jwt, userDetails.getUsername())) {

                            UsernamePasswordAuthenticationToken auth =
                                    new UsernamePasswordAuthenticationToken(
                                            userDetails,
                                            null,
                                            userDetails.getAuthorities()
                                    );

                            auth.setDetails(
                                    new WebAuthenticationDetailsSource()
                                            .buildDetails(request)
                            );

                            SecurityContextHolder.getContext()
                                    .setAuthentication(auth);
                        }
                    }

                } catch (JwtException | IllegalArgumentException e) {
                    // Invalid JWT: authentication set mat karo
                    SecurityContextHolder.clearContext();
                }
            }
        }

        chain.doFilter(request, response);
    }
}
