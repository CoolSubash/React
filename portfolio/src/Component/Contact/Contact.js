import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
function Contact() {
  const inputData = useRef('')
  console.log(inputData)

  const formSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_bm073ob',
        'template_yef84ji',
        inputData.current,
        'VPnehk8CXHNpTR436',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    console.log(inputData.current)
  }
  return (
    <>
      <section id="f-heading">
        <h1>Contact US</h1>
      </section>
      <section id="f">
        <form onSubmit={formSubmit} ref={inputData}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="user_name"
                placeholder="Your name.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Subject </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="user_subject"
                placeholder="Subject"
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Message</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="message"
                placeholder="Write something.."
                style={{ height: 200 + 'px' }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact
