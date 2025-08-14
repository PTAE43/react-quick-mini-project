// import { useState } from "react";
// import { movies } from "./constants/movies";
// import { validateForm } from "./utils/validation";
// import SurveyForm from "./components/SurveyForm/SurveyForm";
// import SummaryView from "./components/SummaryView/SummaryView";
// import "./App.css";

// const initial = { name: "", email: "", movieId: "", comment: "" };

// export default function App() {
//   const [formData, setFormData] = useState(initial);
//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState("form");

//   const handleChange = (field, value) => {
//     console.log(field, value)
//     setFormData(prev => ({ ...prev, [field]: value }));
//   }


//   const handleSubmit = () => {
//     const errs = validateForm(formData);
//     if (Object.keys(errs).length) return setErrors(errs);
//     setErrors({});
//     setStep("summary");
//   };

//   const handleReset = () => { setFormData(initial); setErrors({}); };
//   const handleRestart = () => { handleReset(); setStep("form"); };

//   return (
//     <div className="max-w-2xl mx-auto p-4 md:p-6">
//       {step === "summary" ? (
//         <SummaryView data={formData} movies={movies} onRestart={handleRestart} />
//       ) : (
//         <SurveyForm
//           formData={formData}
//           errors={errors}
//           onChange={handleChange}
//           onSubmit={handleSubmit}
//           onReset={handleReset}
//           movieOptions={movies}
//         />
//       )}
//     </div>
//   );
// }

import "./App.css";
import MovieForm from "./components/SurveyForm/SurveyForm";

export default function App() {
  return (

          <MovieForm />

  );
}
