using Proyecto2Lenguajes.Model.Exceptions;
using System;
using System.Collections.Generic;

namespace Proyecto2.Model.Domain
{
    /// <summary>
    /// Clase que admnistra carrito
    /// </summary>
    public class Carrito
    {

        private string id;
        public string Id
        {
            get { return id; }
            set {
                if (string.IsNullOrEmpty(value) || string.IsNullOrWhiteSpace(value)) throw new CompanniaException("El id no puede estar vacío");
                id = value; }
        }



        private Productos productos;
        public Productos Productos
        {
            get { return productos; }
            set { productos = value ?? throw new CompanniaException("Los productos no pueden estar vacios"); }
        }


        private Usuario usuario;
        public Usuario Usuario
        {
            get { return usuario; }
            set { usuario = value ?? throw new CompanniaException("El usuario debe existir"); }
        }




        /// <summary>
        /// Método que asigna un producto y una cantidad al carrito
        /// </summary>
        public void Asignar(Producto producto,int cantidad)
        {
            if (validarAsignar(producto, cantidad))
            {
                
            }
        }

        private bool validarAsignar(Producto producto, int cantidad)
        {
            return true;//hacer logica
        }
    }
}
