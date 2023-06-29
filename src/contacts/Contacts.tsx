import styleContainer from '../common/styles/Container.module.css'
import style from '../contacts/Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                    <form action="" className={style.form}>
                        <input type="text" className={style.firstInput}/>
                        <input type="text" className={style.secondInput}/>
                        <textarea className={style.textarea}></textarea>
                    </form>
                    <button>Send</button>
            </div>
        </div>
    )
}