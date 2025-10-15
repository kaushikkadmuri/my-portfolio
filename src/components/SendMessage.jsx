import './SendMessage.css';

function SendMessage() {
    return(
        <>
        <div className="contact-form-row-wrapper">
            <h3>Send Your Queries </h3>
            <div className="form-container">
                <div className="input-row1">
                    <input className='input-field-name' type="text" placeholder='Name' />
                    <input className='input-field-email' type="email" placeholder='Email' />
                </div>
                <div className="input-row2">
                    <input className='input-field-subject' type="text" placeholder='Subject' />
                </div>
                <div className="input-row3">
                    <textarea className='textarea' placeholder='Message' name="" id=""></textarea>
                </div>
                <div className="send-btn-row">
                    <button className='send-btn'>Submit</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SendMessage;