import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosWithAuth from "../AxiosAuth";
import EditPetModal from "./EditPetModal";
import AddAnamnesisModal from "./AddAnamnesisModal";
import AddHealthUpdateModal from "./AddHealthUpdateModal";
import PetInfo from "./PetInfo";

const PetProfilePage = () => {
    const { petId } = useParams();
    const navigate = useNavigate();
    const axiosInstance = useAxiosWithAuth();
    const [petInfo, setPetInfo] = useState(null);
    const [anamneses, setAnamneses] = useState([]);
    const [healthUpdates, setHealthUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddAnamnesisModalOpen, setIsAddAnamnesisModalOpen] = useState(false);
    const [isAddHealthUpdateModalOpen, setIsAddHealthUpdateModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const petResponse = await axiosInstance.get(`/pets/pet/${petId}`);
                setPetInfo(petResponse.data);

                const anamnesesResponse = await axiosInstance.get(`/anamnesis/all-by-patient/${petId}`);
                setAnamneses(anamnesesResponse.data);

                const healthUpdatesResponse = await axiosInstance.get(`/health/all/${petId}`);
                setHealthUpdates(healthUpdatesResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [petId, axiosInstance]);

    const handleSavePet = async (updatedData) => {
        try {
            const response = await axiosInstance.put(`/pets/update-pet/${petId}`, updatedData);
            setPetInfo(response.data);
            setIsEditModalOpen(false);
            alert("Pet profile updated successfully!");
        } catch (error) {
            console.error("Error updating pet info:", error);
            alert("Failed to update pet profile. Please try again later.");
        }
    };

    const handleSaveAnamnesis = async (anamnesisData) => {
        try {
            const response = await axiosInstance.post("/anamnesis/save", anamnesisData);
            setAnamneses([...anamneses, response.data]);
            setIsAddAnamnesisModalOpen(false);
            alert("Anamnesis saved successfully!");
        } catch (error) {
            console.error("Error saving anamnesis:", error);
            alert("Failed to save anamnesis. Please try again later.");
        }
    };

    const handleSaveHealthUpdate = async (healthUpdateData) => {
        try {
            const response = await axiosInstance.post("/health/save", healthUpdateData);
            setHealthUpdates([...healthUpdates, response.data]);
            setIsAddHealthUpdateModalOpen(false);
            alert("Health update saved successfully!");
        } catch (error) {
            console.error("Error saving health update:", error);
            alert("Failed to save health update. Please try again later.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!petInfo) {
        return <div>No pet information found.</div>;
    }

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
                <PetInfo petInfo={petInfo} onEdit={() => setIsEditModalOpen(true)} />
            </div>

            <div style={{ flex: 1 }}>
                <h2>Anamneses</h2>
                {anamneses.length > 0 ? (
                    <table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {anamneses.map((anamnesis) => (
                            <tr key={anamnesis.id}>
                                <td>{new Date(anamnesis.date).toLocaleDateString()}</td>
                                <td>{anamnesis.description}</td>
                                <td>
                                    <button onClick={() => navigate(`/anamnesis/${anamnesis.id}`)}>
                                        More info
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No anamneses found.</p>
                )}
                <button onClick={() => setIsAddAnamnesisModalOpen(true)}>Add New Anamnesis</button>

                <h2>Health Updates</h2>
                {healthUpdates.length > 0 ? (
                    <table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Dynamics</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {healthUpdates.map((update) => (
                            <tr key={update.id}>
                                <td>{new Date(update.date).toLocaleDateString()}</td>
                                <td>{update.dynamics ? "Positive" : "Negative"}</td>
                                <td>
                                    <button onClick={() => console.log("More info:", update.id)}>
                                        More info
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No health updates found.</p>
                )}
                <button onClick={() => setIsAddHealthUpdateModalOpen(true)}>Add Health Update</button>
            </div>

            {isEditModalOpen && (
                <EditPetModal
                    petInfo={petInfo}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSavePet}
                />
            )}

            {isAddAnamnesisModalOpen && (
                <AddAnamnesisModal
                    petId={petId}
                    onClose={() => setIsAddAnamnesisModalOpen(false)}
                    onSave={handleSaveAnamnesis}
                />
            )}

            {isAddHealthUpdateModalOpen && (
                <AddHealthUpdateModal
                    petId={petId}
                    onClose={() => setIsAddHealthUpdateModalOpen(false)}
                    onSave={handleSaveHealthUpdate}
                />
            )}
        </div>
    );
};

export default PetProfilePage;