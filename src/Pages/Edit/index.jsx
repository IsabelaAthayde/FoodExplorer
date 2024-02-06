import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { TagItem } from '../../Components/TagItem';
import { LabeledInput } from '../../Components/LabeledInput';
import { Error } from '../../Components/Error';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowUpTray } from 'react-icons/hi2';

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useNavigate, useParams } from 'react-router-dom';

export function Edit({isAdmin}) {
    const { updateMeal, useMeal } = useAuth()
    
    const [meals, setMeals] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    
    const [title, setTitle] = useState();
    const [category, setCategory] = useState("default");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const [mealImageFile, setMealImageFile] = useState(null);
    const [mealImage, setMealImage] = useState(null);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    useEffect(() => {
         async function fetchDetails(id) {
            const meal = await useMeal({id})
            // console.log(meal, meal.data.hasOwnProperty('error'), "false>>>",!meal.data.hasOwnProperty('error'))
            if(meal && !meal.data.hasOwnProperty('error')) {
                setMeals(meal.data)
                setTags(meal.data.tags)
            }
        }
        fetchDetails(params.id)
    }, [])
    
    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }
    
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }
    
    function handleChangeMealImage(event) {
        const file = event.target.files[0];
        setMealImageFile(file)

        const imagePreview = URL.createObjectURL(file);
        setMealImage(imagePreview);
    }

    async function handleUpdateMeal() {

        const mealUpdated = {
            title,
            category,
            price,
            description,
            tags
        }
        
        const id = params.id;

        await updateMeal({ mealUpdated, mealImageFile, id })

        alert("Prato atualizado!")
        navigate(-1)
    }

    async function handleDeleteMeal() {
        let confirmed = confirm("Você realmente quer deletar esse prato?")
        
        if(confirmed) {
            await api.delete(`/meals/${params.id}`)
            alert("Prato deletado!")
            navigate('/')
        }
    }

    if(isAdmin && meals != "") {
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
                        onClick={() => navigate(-1)}
                        />
                        <h2>Editar prato</h2>

                        <section>

                            <label>Imagem do prato
                            <LabeledInput 
                            name="file" 
                            type="file" 
                            label="Selecione a Imagem para altera-lá"
                            icon={<HiArrowUpTray />} 
                            placeholder="Selecione a Imagem para altera-lá" 
                            onChange={(e) => handleChangeMealImage(e)}
                            loading="lazy"
                            />
                            </label>

                            <LabeledInput 
                            name="name" 
                            type="text" 
                            label="Nome"
                            value={title}
                            placeholder={meals.title}
                            onChange={e => setTitle(e.target.value)}
                            />
                
                            <label htmlFor="Category" id="Category">Categoria
                                <select name="Category" value={category} 
                                placeholder={category}
                                onChange={e => setCategory(e.target.value)}>
                                    <option value="default" disabled>Escolha uma das opções</option>
                                    <option value="meal">Refeição</option>
                                    <option value="dessert">Sobremesa</option>
                                    <option value="drink">Bebidas</option>
                                </select>
                            </label>

                        </section>

                        <section>

                        <label htmlFor="Ingredient" id="Ingredient">Ingredientes
                            <div id="tagitem-container">
                            {tags && 
                                tags.map((tag, index) => 
                                    <TagItem
                                    key={String(index)}
                                    value={tag.name || tag}
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
                        name="price" 
                        label="Preço" 
                        placeholder={meals.price}
                        step="0.1"
                        min="0"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        />


                        </section>

                        <label htmlFor="Description" id="Description">Descrição
                            <textarea 
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            placeholder={!description ? meals.description : "Ex: A salada Ceasar é muito boa para a saúde"}
                            >
                            </textarea>
                        </label>

                        <section>
                            <Button className="handleEdit" type="button" text="Excluir prato"onClick={handleDeleteMeal}/>
                            <Button className="handleEdit" type="button" text="Salvar alterações" onClick={handleUpdateMeal}/>
                        </section>
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