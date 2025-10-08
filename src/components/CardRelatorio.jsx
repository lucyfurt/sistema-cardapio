export default function CardRelatorio({ aluno, presente }) {
  return (
    <div>
      {aluno} {presente ? "(Presente)" : "(Ausente)"}
    </div>
  );
}