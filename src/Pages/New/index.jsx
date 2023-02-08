import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { TagItem } from '../../Components/TagItem';
import { LabeledInput } from '../../Components/LabeledInput';

import { Icon } from '../../Components/Icon';

import { Header } from "../../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowUpTray } from 'react-icons/hi2';

export function New({isAdmin}) {
    return (
        <Container>
            <Header isAdmin />

            <main>
                <form>
                    <Button type="button" id="back" icon={<MdKeyboardArrowLeft />} text="Voltar" />
                    <h2>Novo prato</h2>

                    <section id="row1">

                        <label>Imagem do prato
                            <LabeledInput name="file" type="file" label="Selecione a Imagem" icon={<HiArrowUpTray />} placeholder="Selecione a Imagem" />
                        </label>

                        <LabeledInput name="name" type="text" label="Nome" placeholder="Ex.: Salada Ceasar"/>
            
                        <label htmlFor="Category" id="Category">Categoria
                            <select name="Category" placeholder="Refeição">
                                <option value="Refeição">Refeição</option>
                                <option value="Pratos principais">Pratos principais</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </label>

                    </section>

                    <section id="row2">

                    <label htmlFor="Ingredient" id="Ingredient">Ingredientes
                        <div id="tagitem-container">
                            <TagItem value="Pão naan" />
                            <TagItem isNew placeholder="Adicionar" />
                        </div>
                    </label>

                    <LabeledInput name="price" label="Preço" placeholder="R$ 00,00" />


                    </section>
                    
                    <label htmlFor="Description" id="Description">Descrição
                        <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
                        </textarea>
                    </label>
                    <Button id="btn" type="button" text="Salvar alterações"/>
                </form>
            </main>

            <Footer/>
        </Container>
    )
}