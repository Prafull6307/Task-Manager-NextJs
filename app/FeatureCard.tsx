import React, { ReactNode } from "react";
import { FiCheckCircle, FiList, FiCalendar } from "react-icons/fi";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
     return (
       <div className="w-full md:w-1/3 px-4 mb-8">
         <div className="bg-blue-700 rounded-lg p-6 flex items-center justify-center flex-col h-full">
           <div className="mb-4">{icon}</div>
           <h3 className="text-xl font-semibold mb-2">{title}</h3>
           <p className="text-white text-center">{description}</p>
         </div>
       </div>
     );
   };