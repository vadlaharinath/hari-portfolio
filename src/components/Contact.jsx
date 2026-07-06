import "../styles/Contact.css";
import contactData from "../data/contactData";

function Contact() {

return (

<section className="contact-section" id="contact">

<div className="contact-left">

<span className="contact-tag">
CONTACT
</span>

<h1>
Let's <span>Connect</span>
</h1>

<p>

I'm currently looking for Full Stack Developer opportunities.
Whether you have an internship, full-time role, freelance
project or just want to connect, feel free to reach out.

</p>

<div className="status">

<div className="status-dot"></div>

<span>Available for Work</span>

</div>

</div>

<div className="contact-right">

{
contactData.map((item)=>{

const Icon=item.icon;

return(

<a
key={item.id}
href={item.link}
target="_blank"
rel="noreferrer"
className="contact-card"
>

<div className="contact-icon">

<Icon/>

</div>

<div className="contact-details">

<h4>{item.title}</h4>

<p>{item.value}</p>

</div>

</a>

);

})
}

</div>

</section>

)

}

export default Contact;