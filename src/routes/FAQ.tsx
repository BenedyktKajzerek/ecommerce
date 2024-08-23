import { useState } from "react";
import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";
import { questions } from "../data/FAQData";
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveQuestionId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container flex-grow pt-40">
        
        <h1 className="font-extrabold text-7xl text-center mb-12 bg-gradient-to-bl from-primary-light to-secondary-dark text-transparent bg-clip-text">
          FAQ:
        </h1>

        {questions.map(question => (
          <Question
            key={ question.id }
            id={ question.id }
            title={ question.title }
            text={ question.text }
            isActive={ question.id === activeQuestionId }
            onToggle={ handleToggle }
          />
        ))}

      </div>

      <Footer/>
    </div>
  );
};

interface QuestionProps {
  id: number;
  title: string;
  text: string;
  isActive: boolean;
  onToggle: (id: number) => void;
};

const Question: React.FC<QuestionProps> = ({ id, title, text, isActive, onToggle }) => {
  return (
    <article className="bg-gradient-to-tr from-primary-dark to-primary-light rounded-lg shadow-lg p-6 mb-8 lg:w-1/2 ml-auto mr-auto text-black">
      <div className="flex justify-between items-center pb-4">
        <p className="capitalize font-bold tracking-wide text-black">
          { title }
        </p>
        <button
          type="button"
          className="text-yellow-600 text-2xl"
          onClick={() => onToggle(id)}
        >
          {isActive ? (
            <Minus className="size-8" />
          ) : (
            <Plus className="size-8" />
          )}
        </button>
      </div>
      {isActive && (
        <div className="border-t border-black pt-4">
          <p>{ text }</p>
        </div>
      )}
    </article>
  );
};

export { FAQ };
