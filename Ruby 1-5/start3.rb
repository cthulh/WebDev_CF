def choose1
	puts "Do you like programming? Yes or no please."
	choice = gets.chomp
	if (choice.downcase == "yes")
		puts "That\'s great!"
	elsif (choice.downcase == "no")
		puts "That\'s too bad!"
	else
		puts "That wasn\'t a yes or no."
	end
end

def choose2
	puts "Do you like programming? Yes, no or maybe please."
	choice = gets.chomp
	case choice.downcase
	when "yes"
		puts "That\'s great!"
	when "no"
		puts "That\'s too bad!"
	when "maybe"
		puts "Glag you are giving it a chance!"
	else
		puts "I have no idea that that means."
	end
end
choose1
puts
puts
choose2