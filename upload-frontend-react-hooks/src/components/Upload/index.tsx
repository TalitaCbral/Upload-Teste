import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFiles } from "../../context/files";

import { DropContainer, UploadMessage } from "./style";

function Upload() {
    const { handleUpload } = useFiles();

    const onDrop = useCallback(
        (files) => {
            handleUpload(files);
        },
        [handleUpload]
    );

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            accept: [
                "application/pdf",
                "image/jpeg",
                "image/pjpeg",
                "image/png",
                "image/gif",
            ],
            onDrop,
        });


    const renderDragMessage = useCallback(() => {
        if (!isDragActive) {
            return <UploadMessage>Arraste imagens e/ou pdf's aqui...</UploadMessage>;
        }

        if (isDragReject) {
            return (
                <UploadMessage type="error">
                    Tipo de arquivo não suportado
                </UploadMessage>
            );
        }

        return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
    }, [isDragActive, isDragReject]);

    return (
        <DropContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {renderDragMessage()}
        </DropContainer>
    );
}

export default Upload;
