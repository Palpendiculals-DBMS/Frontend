import React, { Fragment, useEffect, useState, useCallback, useMemo } from 'react';
import classes from './Modal.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { IoMdAnalytics, IoMdTrash } from 'react-icons/io';

const Dropdown = (props) => {

    const ref = React.createRef();

    const [show, setShow] = useState({
        marginTop: '0px',
    });

    useEffect(() => {

        console.log(props.showState);


        if (props.showState) {
            const rect = ref.current.getBoundingClientRect();
            console.log(rect, window.innerHeight);
            const windowHeight = window.innerHeight;

            if ((rect.y + rect.height + 20) > windowHeight) {
                setShow({
                    marginTop: `-${rect.height + 45}px`
                })
            } else {
                setShow({
                    marginTop: '10px'
                })
            }
        } else {
            setShow({
                marginTop: '10px'
            })
        }
    }, [props.showState]);

    return (
        <div
            ref={ref}
            className={`${props.className} `}
            style={{
                marginTop: show.marginTop
            }}
        >
            {props.components.map((component, index) => {
                return (
                    <button
                        className={`flex justify-around w-full items-center p-2 hover:bg-slate-200
                        active:bg-slate-300
                        `}
                        key={index}
                        onClick={() => {
                            console.log('Clicked');
                            component.onClick();
                        }}
                        onBlur={props.onBlur}
                    >
                        <component.icon
                        />
                        <span
                            className={`self-center`}
                        >{component.text}</span>
                    </button>
                )
            })}
        </div>
    )
}

const Modal = (props) => {
    const history = useHistory();

    const [show, setShow] = useState(false);

    const Dropdowncomponents = [
        {
            icon: IoMdTrash,
            text: 'Delete',
            onClick: () => {
                props.onDelete(props.id);
                setShow(false);
            }
        },
        {
            icon: IoMdAnalytics,
            text: 'Analytics',
            onClick: () => {
                history.push(`/analytics/${props.id}`);
                setShow(false);
            }
        }
    ]

    return (
        <Fragment>
            <div className={`font-body bg-red-400 px-4 py-3 pt-5 text-white w-60 rounded-md flex flex-col hover:border-slate-400 border-2 outline-dotted transition-all`}>
                <div className={classes.modalHeading}>
                    <h2>{props.title}</h2>
                    <hr />
                    <p
                        className={`p-2 text-gray-100/50`}
                    >
                        {props.description.toString().slice(0, 10)}...
                    </p>
                </div>
                <div className={`${classes.modalButtons} flex-grow`}>
                    <button
                        onClick={(e) => {
                            props.onPreview(e, props.id);
                        }}
                        className={`opacity-50 hover:opacity-100 transition-all`}
                    >Preview</button>
                    <button
                        className={`opacity-50 hover:opacity-100 transition-all`}
                        onClick={(e) => {
                            props.ViewForm(e, props.id);
                        }}
                    >View Form</button>

                </div>
                <div
                    className={`pt-3`}
                    onFocus={() => {
                        setShow(true);
                    }}
                >
                    <button
                    >
                        <button
                        >
                            <BsThreeDotsVertical
                                onClick={() => {
                                    setShow(!show);
                                }}

                            />


                            <Dropdown
                                className={`
                            absolute bg-gray-100 text-red-500 flex flex-col 
                            shadow-3xl 
                            rounded-lg
                            transition-all
                            w-36
                            overflow-hidden
                            ${show ? 'h-auto opacity-100 py-3 pointer-events-auto cursor-pointer' : 'pointer-events-none opacity-0'}
                            `}
                                components={Dropdowncomponents}
                                showState={show}
                                id={props.id}
                                onBlur={() => {
                                    setShow(false);
                                }}
                            />
                        </button>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal