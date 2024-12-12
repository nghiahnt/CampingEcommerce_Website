function FormControl ({ children }) {
    return (
        <div className="card mt-4 mb-3">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default FormControl;