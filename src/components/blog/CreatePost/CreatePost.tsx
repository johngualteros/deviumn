import React, { useState } from 'react';
import './CreatePost.css';
import { motion } from 'framer-motion';
import { TypeContent, type Content, type Form } from './interfaces/PostInterfaces';
import { useContent } from './hooks/PostHooks';

const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px',
    color: '#fff'
};

export const CreatePost = () => {

    const { isOpenOptions, openOptions, addNewContent, onTitleChange, form, content, onChangeContent } = useContent();

    return (
        <div style={containerStyle}>
            <div className='creator'>
                <h1>Create A New Post</h1>

                <div className='form'>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={(e) => onTitleChange(e)}/>
                    </div>

                    <h3>
                        Content
                    </h3>

                    <div className='add_fields'>
                        <button  onClick={openOptions}>Add</button>
                        {
                            isOpenOptions && (
                                <motion.div animate={{ x: 10 }} className='options'>
                                    Select option

                                    <div className='option_container'>
                                        <div className='option'>
                                            <i className="uil uil-paragraph" onClick={() => addNewContent(TypeContent.PARAGRAPH)}></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-image"></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-link"></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-arrow"></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-angle-double-up" onClick={() => addNewContent(TypeContent.SUBTITLE)}></i>
                                        </div>
                                    </div>

                                </motion.div>
                            )
                        }
                    </div>

                    {
                        content.map((item, index) => (
                            <div key={index}>
                                {item.type === TypeContent.PARAGRAPH && (
                                    <>
                                        <p className='badge'>{item.type}</p>
                                        <input type="text" id="content" onChange={(e) => onChangeContent(e, item.uuid)}/>
                                    </>
                                )}

                                {item.type === TypeContent.SUBTITLE && (
                                    <>
                                        <p className='badge'>{item.type}</p>
                                        <input type="text" id="content" onChange={(e) => onChangeContent(e, item.uuid)}/>
                                    </>
                                
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1>{form.title}</h1>

                {content.map((item, index) => (
                    <div key={index}>
                        {item.type === TypeContent.PARAGRAPH && (
                            <>
                                <p className='badge'>{item.type}</p>
                                <p>{item.content}</p>
                            </>
                        )}

                        {item.type === TypeContent.SUBTITLE && (
                            <>
                                <p className='badge'>{item.type}</p>
                                <h2>{item.content}</h2>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};