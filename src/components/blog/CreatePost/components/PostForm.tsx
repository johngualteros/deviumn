import React from 'react';
import '../CreatePost.css';
import { useContent } from '../hooks/PostHooks';
import { TypeContent } from '../interfaces/PostInterfaces';
import { motion } from 'framer-motion';

interface PostFormProps {
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onTitleChange, handleSubmit }) => {
    const { isOpenOptions, openOptions, addNewContent } = useContent();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={onTitleChange} />
            </div>

            <h3>Content</h3>

            <div className='add_fields'>
                <button type="button" onClick={openOptions}>Add</button>
                {isOpenOptions && (
                    <motion.div animate={{ x: 10 }} className='options'>
                        Select option

                        <div className='option_container'>
                            {Object.values(TypeContent).map(type => (
                                <div key={type} className='option'>
                                    <i className={`uil uil-${type.toLowerCase()}`} onClick={() => addNewContent(type)}></i>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </form>
    );
};

export default PostForm;
