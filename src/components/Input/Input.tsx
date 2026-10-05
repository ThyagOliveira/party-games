import "./Input.module.scss";

interface InputProps {
  labelName?: string;
}

export default function Input({ labelName }: InputProps) {
  return (
    <div>
      <label htmlFor="input">{labelName}</label>
      <input id="inputld" type="text" />
    </div>
  );
}
// elemento atributo = "valor"    -> abre + atributo
// conteudo          --> conteúdo
// elemento   --> fecha
