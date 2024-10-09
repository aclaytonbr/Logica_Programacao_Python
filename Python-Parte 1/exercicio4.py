# Armazene o preço de um produto e o percentual de desconto em duas variáveis. 
# Calcule e exiba o valor final do produto após o desconto sabendo que a fórmula para
# obter este valor é: Valor do Protudo x (1 - (Desconto / 100))

vlr_produto = float(input("Informe o valor do produto: "))
perc_desconto = float(input("Informe o valor do desconto: "))

print(f'O valor do produto com desconto é { vlr_produto * (1 - (perc_desconto/100))}' )