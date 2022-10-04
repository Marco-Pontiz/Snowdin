import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css';
const formu = () => {
    return(
                <Form className='form'>
                    <h3 className='up-form'>Complete the next Form</h3>
                    <h4 className='up-form mb-5'>Please fill in the form below so that you can make your dream sporting purchases!</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='up-form'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='up-form'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className='Check'/></Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='up-form'>Select your country</Form.Label>
                    <Form.Select enabled>
                        <option value='AR'>Argentina</option>
                        <option value='QAT'>Qatar</option>
                        <option value='IT'>Italy</option>
                        <option value='UEA'>United State</option>
                        <option value='UK'>Ingland</option>
                        <option value='FR'>France</option>
                        <option value='DEU'>Germany</option>
                        <option value='ESP'>Spain</option>
                        <option value='NO'>Norway</option>
                        <option value='SW'>Sweeden</option>
                        <option value='FI'>Finland</option>
                        <option value='PRY'>Paraguay</option>
                        <option value='PE'>Perú</option>
                        <option value='BR'>Brazil</option>
                        <option value='PRT'>Portugal</option>
                        <option value='RO'>Romania</option>
                        <option value='RUS'>Russia</option>
                        <option value='CHN'>China</option>
                        <option value='MEX'>México</option>
                        <option value='CAN'>Canada</option>
                        <option value='CH'>Switzerland</option>
                        <option value='JPN'>Japan</option>
                        <option value='ISL'>Iceland</option>
                        <option value='COL'>Colombia</option>
                        <option value='UKR'>Ukrain</option>
                        <option value='ZA'>South Africa</option>
                        <option value='KE'>Kenia</option>
                        <option value='UY'>Uruguay</option>
                        <option value='ECU'>Ecuador</option>
                        <option value='NIC'>Nicaragua</option>
                        <option value='EG'>Egypt</option>
                        <option value='ERI'>Eritrea</option>
                        <option value='UAE'>United Arab Emirates</option>
                        <option value='SA'>Saudi Arab</option>
                        <option value='SGP'>Singapore</option>
                        <option value='KW'>Kuwait</option>
                        <option value='OM'>Omán</option>
                        <option value='YE'>Yemen</option>
                        <option value='DJI'>Yibuti</option>
                        <option>Other...</option>
                    </Form.Select>
                </Form.Group>
                <Button type='submit' variant="primary" className='buttom mb-5' value='Send'>Register</Button>
                </Form>
            );
        }

export default formu;