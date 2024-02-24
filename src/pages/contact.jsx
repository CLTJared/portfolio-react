export default function ContactPage() {

    return (
      <div className="container pt-4" id="home-page">
        <form className="row g-4 needs-validation" method="get">
            <div className="col-md-4">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="input-email">✉</span>
                    <input type="text" className="form-control" id="email" aria-describedby="input-email" placeholder="example@domain.com" required />
                    <div className="invalid-feedback">Please enter an email address.</div>
                </div>
            </div>

        <div className="col-md-12">
            <label htmlFor="input-message" className="form-label">Message</label>
            <textarea  className="form-control" id="input-message" rows="5" required />
            <div className="invalid-feedback">
            Please enter your message.
            </div>
        </div>
        <div className="col-6">
            <div className="form-switch">
            <input className="form-check-input" type="checkbox" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
                &nbsp;I'm not a robot.
            </label>
            <div className="invalid-feedback">
                You must agree before submitting.
            </div>
            </div>
        </div>
        <div className="col-6 pb-4 text-end">
            <button className="btn btn-primary" type="submit">Contact Me</button>
        </div>
        </form>
      </div>
      
    );
  }
  


  