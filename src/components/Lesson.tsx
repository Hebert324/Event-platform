import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm ",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <div>
      <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">{availableDateFormatted}</span>

        <div
          className={classNames(
            "relative rounded border p-4 mt-2 group-hover:border-green-500 transition-colors",
            {
              "bg-green-500": isActiveLesson,
              "border-gray-500": !isActiveLesson
            }
          )}
        >
          <div
            className={classNames(
              "absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-green-500",
              {block: isActiveLesson,
                hidden: !isActiveLesson,
              })} 
          ></div>
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className={classNames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson
              })}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}

            <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border", {
              "border-white": isActiveLesson,
              "border-green-300": !isActiveLesson
            })}>
              {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>

          <strong
            className={classNames("mt-5 block", {
              "text-white": isActiveLesson,
              "text-gray-200": !isActiveLesson
            })}
          >
            {props.title}
          </strong>
        </div>
      </Link>
    </div>
  );
}