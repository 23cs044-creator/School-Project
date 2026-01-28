export const Contact = () => {
  return (
    <div style={{
      fontSize:'20px',backgroundImage:` url('https://cdn.pixabay.com/photo/2015/08/26/13/15/contact-us-908483_960_720.png')`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',padding:'320px',
      width:'0-auto'
    }}>
      <center>
      <h2 style={{ color: 'black' }}>Contact Us</h2>
      <h3 style={{ color: 'black' }}>
        We'd love to hear from you! Whether you have questions about our school, need assistance with enrollment
      </h3>
      <h3 style={{ color: 'black' }}>If you want to share feedback, feel free to reach out. Our team is here to help.</h3>
      <h3 style={{ color: 'black' }}><ul>
        <li><b>Email:</b> school@email.com</li>
        <li><b>Phone:</b> 74108520963</li>
        <li><b>Address:</b> 123 School Lane, Education City, State 12345</li>
      </ul></h3>
      </center>
    </div>
  )
}
