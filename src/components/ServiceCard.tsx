import type { JSX } from "react";

export type Service = {
  title: string;
  description: string;
  img: JSX.Element;
  items: string[];
};

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="py-6 px-4 bg-(--primary-color) text-(--bg-color) text-center rounded-xl shadow-2xl border-2 border-(--primary-color) hover:bg-(--bg-color) hover:text-(--primary-color)">
      {service.img}
      <h2 className="text-2xl font-bold my-2">{service.title}</h2>
      <p className="mb-3">{service.description}</p>
      <ul className="text-start space-y-2">
        {service.items.map((item, i) => (
          <li key={i}>
            <i className="fa-regular fa-circle-check text-xl text-(--text-color) mr-2"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
