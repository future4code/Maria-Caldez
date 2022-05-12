import { useState } from "react";


const useForm = (initialState) => {
  const [form, setForm] = useState (initialState)
  
  const onChange = (event) =>{
    const {name, value} = event.target
    setForm({...form, [name]:value});
  }
  
  const cleanFields = () =>{
    setForm (initialState)
  }
 
  return{form, onChange, cleanFields}

};

export default useForm;


// const useForm = () => {
//   const [values, setValues] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const auxValues = { ...values };
//     auxValues[event.target.name] = event.target.value;
//     setValues(auxValues);
//   };

//   const handleSubmit = (callback) => (event) => {
//     event.preventDefault();
//     setLoading(true);
//     callback();
//     setLoading(false);
//   };

//   return [{ values, loading }, handleChange, handleSubmit];
// };

// export default useForm;


//  <Form onSubmit={handleSubmit(teste)}>
//            <Select type="text" name="name">
//             <option>Escolha uma viagem</option>
//           </Select> 
        //   <Input
        //     onChange={handleChange}
        //     type="text"
        //     name="name"
        //     placeholder="Digite o seu nome"
        //   />
        //   <Input
        //     onChange={handleChange}
        //     type="Number"
        //     name="age"
        //     placeholder="Qual é sua idade"
        //   />
        //   <Input
        //     onChange={handleChange}
        //     type="text"
        //     name="applicationText"
        //     placeholder="Os motivos de sua viagem"
        //   />
        //   <Input
        //     onChange={handleChange}
        //     type="text"
        //     name="profession"
        //     placeholder="Qual é sua profession"
        //   />
        //   <Input
        //     onChange={handleChange}
        //     type="text"
        //     name="country"
        //     placeholder="Informe seu país"
        //   />
        // </Form>
        // <Button type="submit">{loading ? "Enviando..." : "Enviar"}</Button>
        // https://joaopedro.dev/simplificando-formularios-com-hooks/