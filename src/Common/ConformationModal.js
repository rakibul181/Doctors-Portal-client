import React from 'react';

const ConformationModal = ({modalTitle,modalBody,actionText ,action,actoinData}) => {
    return (
        <div>
            <input type="checkbox" id="conformation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{modalTitle}</h3>
                    <p className="py-4">{modalBody}</p>
                    <div className="modal-action">
                    <label htmlFor="conformation-modal" className="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <label onClick={()=>action(actoinData)} htmlFor="conformation-modal" className="btn">{actionText}</label>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;