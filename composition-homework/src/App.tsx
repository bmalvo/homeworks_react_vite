import { ButtonDanger } from "./ButtonDanger"
import { ButtonSuccess } from "./ButtonSuccess"
import { Modal } from "./Modal"
import { PageWrapper } from "./PageWrapper"

export const App = () => {
  return <PageWrapper title='Hello World!'>
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque quidem voluptatem consectetur eaque similique? Molestiae exercitationem rerum, omnis inventore quia repellendus. Amet sunt sapiente voluptate repellendus consequuntur. Ratione, dicta?'
    <Modal title="Potwierdź" text='Czy na pewno chcesz to wykonać?' controls={<ButtonSuccess label='Tak'></ButtonSuccess>} />
    <Modal title="Ostrzeżenie" text='Czy chcesz usunąć ten obiekt?' controls={<ButtonDanger label='Usuń'></ButtonDanger>} />
  </PageWrapper>
}