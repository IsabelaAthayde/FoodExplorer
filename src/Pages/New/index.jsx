import { Container } from "./styles";

import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate, useParams } from 'react-router-dom';


import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { TagItem } from '../../Components/TagItem';
import { LabeledInput } from '../../Components/LabeledInput';
import { Error } from '../../Components/Error';
import { Icon } from '../../Components/Icon';

import { Header } from "../../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowUpTray } from 'react-icons/hi2';
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";

export function New({isAdmin}) {
    const { createMeal } = useAuth()

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const [mealImageFile, setMealImageFile] = useState(null);
    const [mealImage, setMealImage] = useState(null);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=> {
        let isBlocked;
        {isAdmin ? isBlocked = false : isBlocked = true}
    }, [])
    
    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleChangeMealImage(event) {
        event.preventDefault();
        const file = event.target.files[0];
        setMealImageFile(file)

        const imagePreview = URL.createObjectURL(file);
        setMealImage(imagePreview);


    }

    async function handleNewMeal() {
        const mealUpdated = {
            title,
            category,
            price,
            tags,
            description
        }

        const result = await createMeal({ mealUpdated, mealImageFile });
        if(result) {
            navigate(-1)
        }
    }

    if(isAdmin) {
    return (
        <Container>
            <Header isAdmin />

            <main>
                <form>
                    <Button 
                    type="button" 
                    id="back" 
                    icon={<MdKeyboardArrowLeft />} 
                    text="Voltar" 
                    onClick={()=> navigate(-1)}
                    />
                    <h2>Novo prato</h2>

                    <section id="row1">

                        <label>Imagem do prato
                            <LabeledInput 
                            name="file" 
                            type="file" 
                            label={mealImageFile ? mealImageFile.name : "Selecione a Imagem"} 
                            icon={<HiArrowUpTray />} 
                            placeholder="Selecione a Imagem" 
                            onChange={(e) => handleChangeMealImage(e)}
                            
                            />
                        </label>

                        <LabeledInput 
                        name="name" 
                        type="text" 
                        label="Nome" 
                        placeholder="Ex.: Salada Ceasar"
                        onChange={e => setTitle(e.target.value)}
                        />
            
                        <label htmlFor="Category" id="Category">Categoria
                            <select name="Category" placeholder="Refeição" onChange={e => setCategory(e.target.value)}>
                                <option value="default">Escolha uma das opções</option>
                                <option value="meal">Refeição</option>
                                <option value="dessert">Sobremesa</option>
                                <option value="drink">Bebidas</option>
                            </select>
                        </label>

                    </section>

                    <section id="row2">

                    <label htmlFor="Ingredient" id="Ingredient">Ingredientes
                        <div id="tagitem-container">
                            {
                                tags.map((tag, index) => 
                                    <TagItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                )
                            }
                            
                            <TagItem 
                            $isnew 
                            placeholder="Adicionar"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            />
                        </div>
                    </label>

                    <LabeledInput
                    type="number"
                    min="0"
                    step=".01"
                    name="price" 
                    label="Preço" 
                    placeholder="R$ 00,00" 
                    onChange={e => setPrice(e.target.value)}
                    />


                    </section>
                    
                    <label htmlFor="Description" id="Description">Descrição
                        <textarea 
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
                        </textarea>
                    </label>
                    <Button id="btn" type="button" text="Salvar alterações" onClick={() => handleNewMeal()}/>
                </form>
            </main>

            <Footer/>
        </Container>
    )
    } else {
        return (
            <Error />
        )
    }
}