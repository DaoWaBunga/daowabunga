type CardProps = {
  title: any;
  body: any;
  footer: any;
};
export const CardBasic = ({ title, body, footer }: CardProps) => {
  return (
    <div className="CardBasic">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};
export default CardBasic;
