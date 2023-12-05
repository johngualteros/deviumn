import React from 'react';
import { TypeContent, type Content } from '../interfaces/PostInterfaces';
import { motion } from 'framer-motion';
import '../CreatePost.css';

interface PostContentProps {
    content: Content[];
    addNewContent: (type: TypeContent) => void;
    isOpenOptions: boolean;
    openOptions: () => void;
}

const PostContent: React.FC<PostContentProps> = ({ content, addNewContent, isOpenOptions, openOptions }) => {
    return (
        <>
            {content.map((item, index) => (
                <div key={index}>
                    {item.type === TypeContent.PARAGRAPH && (
                        <>
                            <p className='badge'>{item.type}</p>
                            <p>{item.content}</p>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default PostContent;
