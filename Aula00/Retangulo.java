public class Retangulo extends Quadrilatero {
    private float base;
    private float altura;

    public float getBase(){
        return base;
    }

    public void setBase(float base){
        this.base = base;
    }

    public float getAltura(){
        return altura;
    }

    public void setAltura(float altura){
        this.altura = altura;
    }

    @Override
    public float calcularArea(){
        float area;
        area = getBase() * getAltura();
        return area;
    }

    @Override
    public float calcularPerimetro(){
        float perimetro;
        perimetro = 2 * (getBase() + getAltura());
        return perimetro;
    }

    public void status(){
        System.out.println("-----------------");
        System.out.println("     Retângulo    ");
        System.out.println("-----------------");
        System.out.println("Área: " + calcularArea());
        System.out.println("Perimetro: " + calcularPerimetro());
        System.out.println("");
    }

}
