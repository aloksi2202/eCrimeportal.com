package com.Backend.Repository;

import com.Backend.Entity.Complaints;
import com.Backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepo extends JpaRepository<Complaints,Long> {
    Complaints findByComplaintId(long complaintId);
    void deleteByComplaintId(long complaintId);
}
