package org.fergoeqs.coursework.repositories;

import org.fergoeqs.coursework.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentsRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findBySlot_VetId(Long vetId);
    List<Appointment> findAppointmentsBySlotDate(LocalDate date);
    List<Appointment> findByPetIdAndSlotDateGreaterThanEqual(Long petId, LocalDate currentDate);
    List<Appointment> findBySlotVetIdAndSlotDateGreaterThanEqual(Long vetId, LocalDate currentDate);
}
