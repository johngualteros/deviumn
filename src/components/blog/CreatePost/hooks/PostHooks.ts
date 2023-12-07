import { useState } from 'react';
import { TypeContent, type Content, type Form } from '../interfaces/PostInterfaces';
import { v4 as uuidv4 } from 'uuid';

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
                    uuid: uuidv4(),
                    type: TypeContent.PARAGRAPH,
                    content: '',
                    order: prevContent.length + 1
                }
            ]);
        } else if (type === TypeContent.SUBTITLE) {
            setContent(prevContent => [
                ...prevContent,
                {
                    uuid: uuidv4(),
                    type: TypeContent.SUBTITLE,
                    content: '',
                    order: prevContent.length + 1
                }
            ]);
        } else if (type === TypeContent.CODE) {
            setContent(prevContent => [
                ...prevContent,
                {
                    uuid: uuidv4(),
                    type: TypeContent.CODE,
                    content: '',
                    order: prevContent.length + 1
                }
            ]);
        }
        setIsOpenOptions(false);
    };

    const onChangeContent = (event: any, uuid: string) => {
        setContent(prevContent => {
            const index = prevContent.findIndex(item => item.uuid === uuid);
            const newContent = [...prevContent];
            newContent[index].content = event.target.value;
            return newContent;
        });
    }

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
        form,
        onChangeContent
    };
};
