public class Circulo extends Quadrilatero {
    private float raio;

    public float getRaio(){
        return raio;
    }

    public void setRaio(float raio){
        this.raio = raio;
    }

    @Override
    public float calcularArea() {
        return (float) (Math.PI * Math.pow(raio, 2));
    }

    @Override
    public float calcularPerimetro() {
        return (float) (2 * Math.PI * raio);
    }

    public void status(){
        System.out.println("-----------------");
        System.out.println("     Circulo     ");
        System.out.println("-----------------");
        System.out.println("Área: " + calcularArea());
        System.out.println("Perimetro: " + calcularPerimetro());
        System.out.println("");
    }
}
