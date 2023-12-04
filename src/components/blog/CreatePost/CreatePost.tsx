import React, { useState } from 'react';
import styles from './CreatePost.module.css';

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

    const [isOpenOptions, setIsOpenOptions] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    const openOptions = () => {
        setIsOpenOptions(!isOpenOptions);
    }

    return (
        <div style={containerStyle}>
            <div className={styles.creator}>
                <h1>Create A New Post</h1>

                <div className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>

                    <h3>
                        Content
                    </h3>

                    <div className={styles.add_fields}>
                        <button  onClick={openOptions}>Add</button>
                        {
                            isOpenOptions && (
                                <div className={styles.options}>
                                    Select option

                                    <div className={styles.option_container}>
                                        <div className={styles.option}>
                                            <i className="uil uil-paragraph"></i>
                                        </div>

                                        <div className={styles.option}>
                                            <i className="uil uil-image"></i>
                                        </div>

                                        <div className={styles.option}>
                                            <i className="uil uil-link"></i>
                                        </div>

                                        <div className={styles.option}>
                                            <i className="uil uil-arrow"></i>
                                        </div>

                                        <div className={styles.option}>
                                            <i className="uil uil-angle-double-up"></i>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};


// ADD FRAMER MOTION FOR ANIMATION WHEN APPEARING THE OPTIONS