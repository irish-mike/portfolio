import React from 'react';
import { images, ImageName } from '../../data/assets'; // Adjust the import path as needed

interface ImageComponentProps {
    name: ImageName; // Use the type for props if needed
}

const ImageComponent: React.FC<ImageComponentProps> = ({ name }) => {
    const imageUrl = images[name];
    if (!imageUrl) {
        return <div>Image not found</div>;
    }
    return <img src={imageUrl} alt={name} />;
};

export default ImageComponent;
