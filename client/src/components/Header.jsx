import PropTypes from 'prop-types';


export const Header = ({ showForm, handleShowForm }) => {

    return (
        <header>
            <hr />
            <div className="header-container">
                <h1>ToDoTech</h1>
                <button className={showForm ? 'disabled-btn' : 'submit-btn'} onClick={handleShowForm} disabled={showForm}>Add ToDo</button>
            </div>
            <hr />
        </header>
    )
}

Header.propTypes = {
    showForm: PropTypes.bool,
    handleShowForm: PropTypes.func
};