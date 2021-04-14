import "./FormControl.scss";


export const FromControl = ({children, label}) => {
    return (
        <div className="form-control">
            <label>{label}</label>
            {children}
        </div>
    );
};
