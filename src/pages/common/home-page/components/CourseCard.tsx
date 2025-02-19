import { Roles } from "@/models/user.model";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModalListUsers } from "@/components/ui/modal-list-users";
import { CourseCardModel } from "../models/course.card";

function CourseCard({ title, teacher, href, role, img_url }: CourseCardModel) {
  return (
    <Card className="relative w-[550px] bg-slate-200 rounded-t-lg overflow-hidden  text-center mb-5">
      <img src={img_url} className="h-[350px] w-full" alt={title} />
      <div>
        <CardHeader>
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
          <CardDescription>
            <p>{teacher}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center">
          <Button>
            <Link to={href}>Ver curso</Link>
          </Button>
          {role == Roles.TEACHER_ROLE && <ModalListUsers />}
        </CardContent>
      </div>
    </Card>
  );
}
export default CourseCard;
