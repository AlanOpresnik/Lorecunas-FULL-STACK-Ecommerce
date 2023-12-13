import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const ActiveOferts = ({ oferts }) => {
  return (
    <div className="">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>Actualmente tienes:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>

          <div className="text-2xl font-bold">{oferts.length}</div>
          <p className=" text-muted-foreground">
            Ofertas activas en la pagina
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveOferts;
