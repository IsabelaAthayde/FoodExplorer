import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { TagItem } from '../../Components/TagItem';
import { LabeledInput } from '../../Components/LabeledInput';

import { Icon } from '../../Components/Icon';

import { Header } from "../../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowUpTray } from 'react-icons/hi2';



export function Edit() {
    return (
        <Container>
            <Header isAdmin />

            <main>
                <form>
                    <Button type="button" id="back" icon={<MdKeyboardArrowLeft />} text="Voltar" />
                    <h2>Editar prato</h2>

                    <section>

                        <label>Imagem do prato
                            <LabeledInput name="file" type="file" label="Imagem do prato" icon={<HiArrowUpTray />} placeholder="Selecione a Imagem para alterá-la" />
                        </label>

                        <LabeledInput name="name" type="text" label="Nome" placeholder="Salada Ceasar"/>
            
                        <label htmlFor="Category" id="Category">Categoria
                            <select name="Category" placeholder="Refeição">
                                <option value="Refeição">Refeição</option>
                                <option value="Pratos principais">Pratos principais</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </label>

                    </section>

                    <section>

                    <label htmlFor="Ingredient" id="Ingredient">Ingredientes
                        <div id="tagitem-container">
                            <TagItem value="Pão naan" />
                            <TagItem isNew placeholder="Adicionar" />
                        </div>
                    </label>

                    <LabeledInput name="price" label="Preço" placeholder="R$ 00,00" />


                    </section>

                    <label htmlFor="Description" id="Description">Descrição
                        <textarea placeholder="A Salada César é uma opção refrescante para o verão.">
                        </textarea>
                    </label>

                    <section>
                        <Button className="handleEdit" type="button" text="Excluir prato"/>
                        <Button className="handleEdit" type="button" text="Salvar alterações"/>
                    </section>
                </form>
            </main>

            <Footer/>
        </Container>
    )
}