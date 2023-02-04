import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { TagItem } from '../../Components/TagItem';
import { LabeledInput } from '../../Components/LabeledInput';

import { Icon } from '../../Components/Icon';

import { HeaderMobile } from "../../Components/Header/Mobile";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowUpTray } from 'react-icons/hi2';



export function New({isAdmin}) {
    return (
        <Container>
            <HeaderMobile isAdmin />

            <main>
                <form>
                    <Button type="button" id="back" icon={<MdKeyboardArrowLeft />} text="Voltar" />
                    <h2>Novo prato</h2>

                    <section>

                        <label>Imagem do prato
                            <LabeledInput name="file" type="file" label="Imagem do prato" icon={<HiArrowUpTray />} placeholder="Selecione a Imagem" />
                        </label>

                        <LabeledInput type="text" label="Nome" placeholder="Ex.: Salada Ceasar"/>
            
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

                    <LabeledInput label="Preço" placeholder="R$ 00,00" value="R$"/>

                    <label htmlFor="Description" id="Description">Descrição
                        <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
                        </textarea>
                    </label>

                    </section>
                    <Button type="button" text="Salvar alterações"/>
                </form>
            </main>

            <Footer/>
        </Container>
    )
}