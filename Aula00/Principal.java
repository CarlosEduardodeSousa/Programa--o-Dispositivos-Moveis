public class Principal {
    public static void main(String[] args) {
         
        Retangulo r = new Retangulo();

        r.setAltura(5);
        r.setBase(4);
        r.calcularArea();
        r.calcularPerimetro();
        r.status();

        Circulo c = new Circulo();

        c.setRaio(5);
        c.calcularArea();
        c.calcularPerimetro();
        c.status();
    }
}
