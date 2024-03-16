import { useState } from 'react'
import Modal from '../Modal/Modal.component'
import './rules.styles.css'
const Rules = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <div className="rules" >
            <div className="rules-btn" onClick={handleModal}>RULES</div>
            {isOpen &&
                (<Modal>
                    <div className="rule-show">
                        <div className="rule-header">
                            <h1>RULES</h1>
                            <img src="/pics/icon-close.svg" className="close-icon"  alt="close" onClick={handleModal} />
                        </div>

                        <div className="rule-img">
                            <img src="/pics/image-rules.svg" alt="rules image" />
                        </div>

                        <img src="/pics/icon-close.svg" className="close-m-icon"  alt="close" onClick={handleModal} />
                        

                    </div>
                </Modal>)
            }

        </div>
    )
}

export default Rules