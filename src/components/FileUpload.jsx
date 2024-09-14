// src/FileUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const apiKey = '%PGhbmXfsKRxV0tO1SJ7*rYW&p)_IZUF59TveQyD2dEqo^>6].k4HuMl83c-CBij';
        const url = 'https://api.massive.io/v1/uploads';

        Array.from(files).forEach(file => {
            const formData = new FormData();
            formData.append('file', file);

            axios.post(url, formData, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => {
                console.log('File uploaded successfully:', response.data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
        });
    };

    return (
        <div
            className={`drop-zone ${dragging ? 'dragover' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
        >
            Drag and drop files here or click to upload
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                multiple
                onChange={(event) => handleFiles(event.target.files)}
            />
        </div>
    );
};

export default FileUpload;
