import React, { useState } from "react";
import useAxiosWithAuth from "../AxiosAuth";

const EditPetModal = ({ petInfo, onClose, onSave }) => {
    const axiosInstance = useAxiosWithAuth();
    const [formData, setFormData] = useState({
        name: petInfo.name || "",
        type: petInfo.type || "CAT",
        age: petInfo.age || "",
        sex: petInfo.sex || "MALE",
        weight: petInfo.weight || "",
        breed: petInfo.breed || "",
        sector: petInfo.sector || "",
    });
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(petInfo.photoUrl);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        onSave(formData);

        if (avatarFile) {
            const formData = new FormData();
            formData.append("avatar", avatarFile);

            try {
                await axiosInstance.put(`/pets/update-avatar/${petInfo.id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                alert("Pet avatar updated successfully!");
            } catch (error) {
                console.error("Error updating pet avatar:", error);
                alert("Failed to update pet avatar.");
            }
        }
    };

    return (
        <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
        }}>
            <h3>Edit Pet Profile</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                    <label>Avatar:</label>
                    {avatarPreview && (
                        <img
                            src={avatarPreview}
                            alt="Avatar Preview"
                            style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }}
                        />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                </div>

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="CAT">Cat</option>
                        <option value="DOG">Dog</option>
                    </select>
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Sex:</label>
                    <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                    >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Breed:</label>
                    <input
                        type="text"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Sector:</label>
                    <input
                        type="text"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditPetModal;