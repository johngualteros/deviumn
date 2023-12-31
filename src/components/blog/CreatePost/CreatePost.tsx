import React, { useCallback, useState } from 'react';
import './CreatePost.css';
import { motion } from 'framer-motion';
import { TypeContent, type Content, type Form } from './interfaces/PostInterfaces';
import { useContent } from './hooks/PostHooks';
import { CodeComponent } from './components/CodeComponent';
import { useDropzone } from 'react-dropzone';

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

    const [imageURL, setImageURL] = useState('');
    
    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        setImageURL(URL.createObjectURL(file));
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

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
                                            <i className="uil uil-image" onClick={() => addNewContent(TypeContent.IMAGE)}></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-link" onClick={() => addNewContent(TypeContent.LINK)}></i>
                                        </div>

                                        <div className='option'>
                                            <i className="uil uil-arrow" onClick={() => addNewContent(TypeContent.CODE)}></i>
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

                                {item.type === TypeContent.CODE && (
                                    <>
                                        <p className='badge'>{item.type}</p>
                                        <textarea name="code" id="code" cols={30} rows={10} onChange={(e) => onChangeContent(e, item.uuid)}></textarea>
                                    </>
                                )}

                                {item.type === TypeContent.LINK && (
                                    <>
                                        <p className='badge'>{item.type}</p>
                                        <input type="text" id="content" onChange={(e) => onChangeContent(e, item.uuid)}/>
                                    </>
                                )}

                                {
                                    item.type === TypeContent.IMAGE && (
                                        <>
                                            <p className='badge'>{item.type}</p>
                                            <div {...getRootProps()} className='dropzone'>
                                                <input {...getInputProps()} />
                                                {
                                                    isDragActive ? (
                                                        <p>Drop the files here ...</p>
                                                    ) : (
                                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                                    )
                                                }
                                            </div>
                                        </>
                                    )
                                }

                                
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

                        {
                            item.type === TypeContent.CODE && (
                                <>
                                    <p className='badge'>{item.type}</p>
                                    <CodeComponent codeString={item.content} />
                                </>
                            )
                        }

                        {
                            item.type === TypeContent.LINK && (
                                <>
                                    <p className='badge'>{item.type}</p>
                                    <a href={item.content} target='_blank'>{item.content}</a>
                                </>
                            )
                        }
                        {
                            item.type === TypeContent.IMAGE && (
                                <>
                                    <p className='badge'>{item.type}</p>
                                    <img src={imageURL} alt="Imagen de post" width={400}/>
                                </>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};