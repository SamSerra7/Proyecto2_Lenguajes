using Proyecto2Lenguajes.Model.Exceptions;

namespace Proyecto2.Model.Domain
{
    /// <summary>
    /// Clase que gestiona usuarios
    /// </summary>
    public class Usuario
    {

        private decimal impuesto;

        public decimal Impuesto
        {
            get { return impuesto; }
            set {
                if (value < 0) throw new CompanniaException("El impuesto no puede ser 0 o negativo");
                impuesto = value;
            }
        }


        private int myVar;

        public int MyProperty
        {
            get { return myVar; }
            set { myVar = value; }
        }



    }
}