import React, { useCallback, useContext, useEffect } from 'react';
import ToastContext from '../../../../contexts/toast-context';
import css from './ToastNotification.module.css';

const ToastNotification = ({message}) => {

    const toastContext = useContext(ToastContext);
    
    const ICON_SOURCE = {
        info: '/assets/img/info-icon.png',
        error: '/assets/img/error-icon.png',
        success: '/assets/img/success-icon.png',
        close: '/assets/img/close-icon.png'
    }

    const closeToast = useCallback(() => {
        toastContext.removeMessage(message.id);
    }, [toastContext, message.id]);

    useEffect(() => {
        setTimeout(closeToast, 7500);
    }, [closeToast]);

    return(
        <div className={`${css.card} ${css[`card--${message.type}`]}`}>
            <img className={css.icon} src={ICON_SOURCE[message.type]} alt={message.type} />
            <div className={css.text}>
                <h4>{message.title}</h4>
                <p>{message.content}</p>
            </div>
            <img className={css.close} src={ICON_SOURCE.close} alt="close" onClick={closeToast}/>
        </div>
    );
}

export default ToastNotification;