import { useState } from 'react';
import { TypeContent, type Content, type Form } from '../interfaces/PostInterfaces';

export const useContent = () => {
    const [content, setContent] = useState<Content[]>([]);
    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [form, setForm] = useState<Form>({
        title: '',
        content: []
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const openOptions = () => {
        setIsOpenOptions(!isOpenOptions);
    };

    const addNewContent = (type: TypeContent) => {
        if (type === TypeContent.PARAGRAPH) {
            setContent(prevContent => [
                ...prevContent,
                {
                    type: TypeContent.PARAGRAPH,
                    content: '',
                    order: prevContent.length + 1
                }
            ]);
        }
        setIsOpenOptions(false);
    };

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            title: event.target.value
        });
    };

    return {
        content,
        isOpenOptions,
        formTitle: form.title,
        handleSubmit,
        openOptions,
        addNewContent,
        onTitleChange,
        form
    };
};
